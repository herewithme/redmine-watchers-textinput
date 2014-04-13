// Part for new issue view
var WatchersTextInput = (function () {
    var checkboxes;
    var select_box;

    function init() {
        $(function () {
            checkboxes = $("#watchers_inputs input");
            select_box = $("#watchers_select_box");

            var autocomplete_box = select_box.select2({'width': "350px"});
            autocomplete_box.change(function (val) {
                sync_checkboxes();
            });
        });
    }

    function sync_checkboxes() {
        var selected_userids = select_box.val();

        checkboxes.prop('checked', false); // clear all boxes first
        if (selected_userids && selected_userids.length) {
            for (var i = 0; i < selected_userids.length; i++) {
                var userid = selected_userids[i];
                $("#issue_watcher_user_ids_" + userid).find('input').prop('checked', true);
            }
        }
    }

    return {
        init: init
    }
})();

// Part for update issue view
var AddWatchersTextInput = (function () {
    var checkbox_parent;
    var checkboxes;
    var select_box;

    function init() {
        $(function () {
            checkbox_parent = $("#users_for_watcher");
            checkboxes = $("#users_for_watcher input");
            select_box = $("#add_watchers_select_box");
            
            var autocomplete_box = select_box.select2({'width': "350px"});
            autocomplete_box.change(function (val) {
                sync_checkboxes();
            });

            fix_modal_overflow();
        });
    }

    function sync_checkboxes() {
        selected_userids = select_box.val();
        //console.log(selected_userids);
        checkboxes.prop('checked', false); // clear all boxes first
        if (selected_userids && selected_userids.length) {
            for (var i = 0; i < selected_userids.length; i++) {
                var userid = selected_userids[i];
                checkbox_parent.find('input[value=' + userid + ']').prop('checked', true);
            }
        }
    }
    
    // have to poll until the modal element exists..
    function fix_modal_overflow() {
        var modal = $(".modal");
        if (modal.length) {
            modal.css("overflow", "visible");
        } else {
            setTimeout(fix_modal_overflow, 100);
        }
    }

    return {
        init: init
    }
})();