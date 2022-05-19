$(document).ready(function () {
	// Табы на Js
	$(".dws-form").on("click", ".tab", function () {
	// Удаляем классы active
		$(".dws-form").find(".active").removeClass("active");


	// Добавляем класс active
		$(this).addClass('active');
		$(".tab-form").eq($(this).index()).addClass("active");
	});
});