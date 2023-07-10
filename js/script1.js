$(document).ready(function () {
    $(".form__check").click(function () {
        var checkbox = $(this).find(".form-check-input");
        var isChecked = checkbox.prop("checked");

        checkbox.prop("checked", !isChecked);

        if (!isChecked) {
            $(this).css("background-color", "#9947E2");
        } else {
            $(this).css("background-color", "");
        }
    });
});


$(document).ready(function () {
    $('#language-selector').change(function () {
        var selectedLanguage = $(this).val();
        // Perform language-specific actions, such as reloading the page with the selected language
        // or updating the content dynamically using AJAX requests.
    });
});

