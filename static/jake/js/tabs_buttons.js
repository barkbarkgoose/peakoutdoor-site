
// -----------------------------------------------------------------------------
function ChangeTab(selection, target){
  var siblings = $(selection).siblings();
  //execute on tabs (selection)
  $(siblings).removeClass("active");
  $(selection).addClass("active");

  //execute on divs shown/invisible (target)
  var tab_group = $("#" + target).siblings();
  $(tab_group).addClass("hidden");
  $("#" + target).removeClass("hidden");
}

// -----------------------------------------------------------------------------
function expand_siblings(selection){
  var siblings = $(selection).siblings();
  $(siblings).toggle(500);
}

// -----------------------------------------------------------------------------
function toggle_div(div_id){
  var target = $(div_id);
  $(div_id).fadeToggle(200);
}

// -----------------------------------------------------------------------------
