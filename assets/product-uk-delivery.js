if (!customElements.get('uk-delivery-estimate')) {
  customElements.define('uk-delivery-estimate', class extends HTMLElement {
    connectedCallback() {
      this.updateDates();
      this.timer = setInterval(() => this.updateDates(), 60000);
    }

    disconnectedCallback() {
      clearInterval(this.timer);
    }

    updateDates() {
      const parts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', hourCycle: 'h23',
      }).formatToParts(new Date()).map(({ type, value }) => [type, value]));
      const holidays = new Set(this.dataset.holidays.split(/[\s,]+/).filter(Boolean));
      const workingDay = (date) => ![0, 6].includes(date.getUTCDay()) &&
        !holidays.has(date.toISOString().slice(0, 10));
      const nextDay = (date) => date.setUTCDate(date.getUTCDate() + 1);
      const addDays = (date, count) => {
        const result = new Date(date);
        while (count > 0) {
          nextDay(result);
          if (workingDay(result)) count--;
        }
        return result;
      };
      const start = new Date(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day)));
      if (Number(parts.hour) >= Number(this.dataset.cutoff)) nextDay(start);
      while (!workingDay(start)) nextDay(start);
      const dispatch = addDays(start, Number(this.dataset.preparation));
      const format = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'UTC', day: 'numeric', month: 'short',
      });
      this.querySelectorAll('[data-min]').forEach((row) => {
        const min = Math.min(Number(row.dataset.min), Number(row.dataset.max));
        const max = Math.max(Number(row.dataset.min), Number(row.dataset.max));
        const first = format.format(addDays(dispatch, min));
        const last = format.format(addDays(dispatch, max));
        row.querySelector('span').textContent = first === last ? first : `${first} - ${last}`;
      });
      this.hidden = false;
    }
  });
}
