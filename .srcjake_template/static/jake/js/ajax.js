// DOCSTRING TEMPLATE
/**
PARAMS:
CALLED BY:
PURPOSE:
RETURN:
**/

// -----------------------------------------------------------------------------
function FillDiv(url_param, type, target_div){
  window.open(url_param);
  return false;
}

// -----------------------------------------------------------------------------
// AJAX requests can be both POST or GET
function ajax_request(req_type, req_url, req_data, req_success, req_error){
  $.ajax({
    type: req_type,
    url: req_url,
    data: req_data,
    success:function(response){
      // $("tbody").html(data);
      req_success(response)
    },
    error:function(response){
      req_error(response)
    },
  });
}

// -----------------------------------------------------------------------------
function get_and_refresh(rtype, id, url, req, target, csrf=null){
  data = {}
  if(rtype == 'POST'){
    var csrf_token = $('input[name="csrfmiddlewaretoken"]').attr('value');
    data['csrfmiddlewaretoken'] = csrf_token;
  }
  function GET_success(response){
    // $(target).html(response);
    $(target).replaceWith(response);
    return true;
  }
  function GET_error(response){
    return false;
  }
  data['req'] = req;
  data['id'] = id;
  ajax_request(rtype, url, data, GET_success, GET_error)
}

// -----------------------------------------------------------------------------
function refresh_target(id, target, csrf=null){
  /**
  PARAMS:
  CALLED BY:
  PURPOSE:
  RETURN:
  **/
  function GET_success(response){
    // $(target).html(response);
    $(target).replaceWith(response);
    return true;
  }
  function GET_error(response){
    return false;
  }
  ajax_request("GET", "/ports/", {'req':'refresh_target','target-id':id}, GET_success, GET_error)
}

// -----------------------------------------------------------------------------
