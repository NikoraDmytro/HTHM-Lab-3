import styles from "./styles.module.scss";

const showToolTip = (event: MouseEvent) => {
  const tooltip = event.currentTarget as HTMLElement;
  const tooltipDropDown = tooltip.children[0] as HTMLElement;

  tooltipDropDown.classList.add(styles.visible);
  tooltipDropDown.classList.add(styles.bellowTooltip);
  tooltipDropDown.classList.add(styles.centerTooltip);

  const dropDownRect = tooltipDropDown.getBoundingClientRect();

  if (dropDownRect.bottom >= window.outerHeight) {
    tooltipDropDown.classList.add(styles.aboveTooltip);
    tooltipDropDown.classList.remove(styles.bellowTooltip);
  }

  if (dropDownRect.right >= window.outerWidth) {
    tooltipDropDown.classList.add(styles.rightTooltip);
    tooltipDropDown.classList.remove(styles.centerTooltip);
  }

  if (dropDownRect.left < 0) {
    tooltipDropDown.classList.remove(styles.centerTooltip);
  }
};

const hideTooltips = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const currentTooltip = target.classList.contains(styles.tooltipDropDown)
    ? target.parentElement
    : target;
  const visibleDropDowns = document.querySelectorAll(`.${styles.visible}`);

  visibleDropDowns.forEach((dropDown) => {
    const tooltip = dropDown.parentElement;

    if (tooltip != currentTooltip) {
      dropDown.className = styles.tooltipDropDown;
    }
  });
};

export const Tooltip = (label: string, text: string) => {
  const tooltip = document.createElement("div");

  tooltip.className = styles.tooltip;
  tooltip.innerHTML = `
    ${label}
    <div class=${styles.tooltipDropDown}>
      ${text}
    </div>
  `;

  tooltip.addEventListener("click", showToolTip);

  document.body.addEventListener("click", hideTooltips);

  return tooltip;
};
