//    ::common function for tab active start::
let activeCommonFunction = (Parent, className) => {
  Parent.forEach((element1) => {
    element1.addEventListener("click", () => {
      Parent.forEach((element2) => {
        element2.classList.remove(className);
      });
      element1.classList.add(className);
    });
  });
};
//    ::common function for tab active end::

//   ::display page on click start::
let displayPage = (pageName, className) => {
  document.querySelectorAll(`.${className}`).forEach((element) => {
    element.style.display = "none";
    document.getElementById(pageName).style.display = "block";
  });
};
//   ::display page on click end::

activeCommonFunction(document.querySelectorAll(".filter_tems li"), "active");
//   ::sidebar active btn start::
activeCommonFunction(document.querySelectorAll(".sidebar li"), "active-tab");
//   ::sidebar active btn end::

//   ::order page active btn start::
activeCommonFunction(document.querySelectorAll(".ord .btns"), "active-btn");
//   ::order page active btn end::

//   ::Menu page active btn start::
activeCommonFunction(document.querySelectorAll(".men .btns"), "active-btn");
//   ::Menu page active btn end::

// ::Side navigation active button start::
activeCommonFunction(
  document.querySelectorAll(".side_navbar li"),
  "active_tab"
);
// ::Side navigation active button end ::

// ::order page active button start::
activeCommonFunction(document.querySelectorAll(".opt .btns"), "active_btn");
// ::order page active button end ::

// ::stock page active button start::
activeCommonFunction(document.querySelectorAll(".stk .btns"), "active_btn");
// ::stock page active button end ::

// ::tables page active button start::
activeCommonFunction(document.querySelectorAll(".tbls .btns"), "active_btn");
// ::tables page active button end ::

// ::tables page active button start ::
activeCommonFunction(document.querySelectorAll(".nav_items li"), "active_tab");

//   ::sidebar active btn start::
activeCommonFunction(document.querySelectorAll(".sidebar li"), "active-tab");
//   ::sidebar active btn end::

//   ::order page active btn start::
activeCommonFunction(document.querySelectorAll(".ord .btns"), "active-btn");
//   ::order page active btn end::

//   ::Menu page active btn start::
activeCommonFunction(document.querySelectorAll(".men .btns"), "active-btn");
//   ::Menu page active btn end::
