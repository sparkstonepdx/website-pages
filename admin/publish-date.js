// static/admin/publish-date-widget.js
const toInputValue = (stored) => {
  if (!stored) return "";
  const d = new Date(stored);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const PublishDateControl = createClass({
  handleInput: function (e) {
    const v = e.target.value;
    this.props.onChange(v ? new Date(v).toISOString() : "");
  },

  render: function () {
    return h(
      "div",
      { className: "publish-date" },
      h("input", {
        id: this.props.forID,
        className: this.props.classNameWrapper,
        type: "datetime-local",
        max: "9999-12-31T23:59",
        value: toInputValue(this.props.value),
        onChange: this.handleInput,
      }),
      h(
        "button",
        {
          type: "button",
          className: "now",
          onClick: () => this.props.onChange(new Date().toISOString()),
        },
        h("span", { style: {padding: '0 4px'} }, "Now"),
      ),
    );
  },
});

CMS.registerFieldType("publishdate", PublishDateControl);
