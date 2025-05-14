$(document).ready(() => {
  // Hide dropdowns and arrow-up icons initially
  $(".dropdownlist").hide();
  $(".arrow-up").hide();
  $("#close-menu").hide();

  // Click handler for Features
  $(".features").click(() => {
    // Toggle the Features dropdown
    $(".list-item-feature").slideToggle();

    // Toggle arrows for Features
    $(".features .arrow-down").toggle();
    $(".features .arrow-up").toggle();

    // Ensure Company dropdown is hidden and arrows are reset
    $(".list-item-company").hide();
    $(".company .arrow-down").show();
    $(".company .arrow-up").hide();

    // Adjust padding
    // $(".nav-list").css("paddingRight", "0");
  });

  // Click handler for Company
  $(".company").click(() => {
    // Toggle the Company dropdown
    $(".list-item-company").slideToggle();

    // Toggle arrows for Company
    $(".company .arrow-down").toggle();
    $(".company .arrow-up").toggle();

    // Ensure Features dropdown is hidden and arrows are reset
    $(".list-item-feature").hide();
    $(".features .arrow-down").show();
    $(".features .arrow-up").hide();

    // Adjust padding
    // $(".nav-list").css("paddingRight", "0");
  });

  // Click handler for menu
  $("#menu").click(() => {
    $(".nav-list").css("display", "block");
    $("#close-menu").show();
  });
  $("#close-menu").click(() => {
    $(".nav-list").css("display", "none");
    $("#close-menu").hide();
  });
});
