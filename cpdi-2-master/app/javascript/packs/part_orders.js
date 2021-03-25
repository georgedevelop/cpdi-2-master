document.addEventListener("turbolinks:load", function() {
  console.log("testtest")
  var options = {
  	url: function(phrase) {
      return "/dashboard/part_order/search.json?q=" + phrase;
    },
    getValue: function(element) {
        return element.name;
    },
    list: {
        onSelectItemEvent: function() {
        	var selectedItemValue = $("#part_order_part_mfr_number").getSelectedItemData().description;
            $("#part_order_part_description").val(selectedItemValue);
        }
    }
  };

  var name_options = {
    url: function(phrase) {
      return "/dashboard/part_order/search_name.json?q=" + phrase;
    },
    getValue: function(element) {
        return element.name;
    },
    list: {
        onSelectItemEvent: function() {
          var selectedItemValue = $("#part_order_part_name").getSelectedItemData().description;
            $("#part_order_part_description").val(selectedItemValue);
          var vendor_id = $("#part_order_part_name").getSelectedItemData().vendor_id;
          var mfr_number = $("#part_order_part_mfr_number").getSelectedItemData().mfr_number;
            $("#part_order_mhr_number").val(mfr_number);
            $("#part_order_vendor_id").val(vendor_id);

        }
    }
  };

  var vendor_options = {
  	url: function(phrase) {
      return "/dashboard/part_order/search_vendor.json?q=" + phrase;
    },
    getValue: function(element) {
        return element.name;
    },
    list: {
        onSelectItemEvent: function() {
        	var contact_person = $("#part_order_vendor").getSelectedItemData().contact_person;
        	var address = $("#part_order_vendor").getSelectedItemData().address;
            $("#part_order_vendor_contact").val(contact_person);
            $("#part_order_vendor_address").val(address);
        }
    }
  };

  $('*[data-behavior="autocomplete-parts-name"]').easyAutocomplete(name_options);
  $('*[data-behavior="autocomplete-parts-mhrnumber"]').easyAutocomplete(options);
  $('*[data-behavior="autocomplete-order-vendors"]').easyAutocomplete(vendor_options);
   flatpickr("[class='flatpickr']", {})

});