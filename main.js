const notifications = document.querySelectorAll(".notification");
const notificationContainer = document.querySelector(".notifications");
const mark = document.querySelector(".main__header-mark");
const unreadElements = document.querySelectorAll(".unread");
const notificationNumber = document.querySelector(".primary-heading--number");
const read = document.querySelector(".read");

let sum = unreadElements.length;
notificationNumber.textContent = sum;

notificationContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".notification");
  if (clicked) {
    clicked.classList.toggle("notification--checked");

    const unread = clicked.querySelector(".unread");

    if (unread) {
      unread.classList.add("read");
      unread.classList.remove("unread");
      sum--;
    } else {
      const readSpan = clicked.querySelector(".read");
      if (readSpan) {
        readSpan.classList.remove("read");
        readSpan.classList.add("unread");
        sum++;
      }
    }

    notificationNumber.textContent = sum;
  }
});

mark.addEventListener("click", function (e) {
  e.preventDefault();

  notifications.forEach((notification) => {
    notification.classList.add("notification--checked");

    const unread = notification.querySelector(".unread");
    if (unread) {
      unread.classList.remove("unread");
      unread.classList.add("read");
    }
  });

  sum = 0;
  notificationNumber.textContent = sum;
});
