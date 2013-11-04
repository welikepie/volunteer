module.exports = {
    england: function() {
        var checkboxes = ["North East England", "London"];
        var tomerge = [];
          for (var i = 0; i < checkboxes.length; i++) {
                if (document.getElementById(checkboxes[i]).checked) {
                    tomerge.push(document.getElementById(checkboxes[i]));
                    console.log("Ello!");
                }

                return tomerge;
            }
        }
    };