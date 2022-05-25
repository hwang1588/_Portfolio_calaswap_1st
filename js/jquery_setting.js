$(document).ready(function () { //문서가 준비되면 1번 버튼에 x-10클래스 추가
    $('#carousel-btn-1').addClass('trans-x-10');
});

$('#carousel-btn-1').mouseenter(function () { //1번 버튼을 클릭하면
    $("#carousel-btn-1").addClass('trans-x-10'); //1번 캐로우셀에 x-10클래스 추가
    $("#carousel-btn-2, #carousel-btn-3, #carousel-btn-4, #carousel-btn-5").removeClass('trans-x-10'); //2,3,4,5 캐로우셀 x-10클래스 제거
});

$('#carousel-btn-1').click(function () { //1번 버튼을 클릭하면
    $("#carousel-btn-1").addClass('trans-x-10'); //1번 캐로우셀에 x-10클래스 추가
    $("#carousel-btn-2, #carousel-btn-3, #carousel-btn-4, #carousel-btn-5").removeClass('trans-x-10'); //2,3,4,5 캐로우셀 x-10클래스 제거
});
$('#carousel-btn-2').click(function () {
    $("#carousel-btn-2").addClass('trans-x-10');
    $("#carousel-btn-1, #carousel-btn-3, #carousel-btn-4, #carousel-btn-5").removeClass('trans-x-10');
});
$('#carousel-btn-3').click(function () {
    $("#carousel-btn-3").addClass('trans-x-10');
    $("#carousel-btn-1, #carousel-btn-2, #carousel-btn-4, #carousel-btn-5").removeClass('trans-x-10');
});
$('#carousel-btn-4').click(function () {
    $("#carousel-btn-4").addClass('trans-x-10');
    $("#carousel-btn-1, #carousel-btn-2, #carousel-btn-3, #carousel-btn-5").removeClass('trans-x-10');
});
$('#carousel-btn-5').click(function () {
    $("#carousel-btn-5").addClass('trans-x-10');
    $("#carousel-btn-1, #carousel-btn-2, #carousel-btn-3, #carousel-btn-4").removeClass('trans-x-10');
});

//팀

$('.team1').mouseenter(function () {
    $('.team1').addClass('team-hover').removeClass('team-leave');
    $('.team2, .team3, .team4, .team5 ').addClass('team-leave').removeClass('team-hover');
});
$('.team2').mouseenter(function () {
    $('.team2').addClass('team-hover').removeClass('team-leave');
    $('.team1, .team3, .team4, .team5 ').addClass('team-leave').removeClass('team-hover');
});
$('.team3').mouseenter(function () {
    $('.team3').addClass('team-hover').removeClass('team-leave');
    $('.team1, .team2, .team4, .team5 ').addClass('team-leave').removeClass('team-hover');
});
$('.team4').mouseenter(function () {
    $('.team4').addClass('team-hover').removeClass('team-leave');
    $('.team1, .team2, .team3, .team5 ').addClass('team-leave').removeClass('team-hover');
});
$('.team5').mouseenter(function () {
    $('.team5').addClass('team-hover').removeClass('team-leave');
    $('.team1, .team2, .team3, .team4 ').addClass('team-leave').removeClass('team-hover');
});


$('.team1').mouseenter(function () {
    $('.team_subs_1').addClass('d-block').removeClass('d-none');
    $('.team_subs_2, .team_subs_3, .team_subs_4, .team_subs_5 ').addClass('d-none').removeClass('d-block');
});

$('.team2').mouseenter(function () {
    $('.team_subs_2').addClass('d-block').removeClass('d-none');
    $('.team_subs_1, .team_subs_3, .team_subs_4, .team_subs_5 ').addClass('d-none').removeClass('d-block');
});

$('.team3').mouseenter(function () {
    $('.team_subs_3').addClass('d-block').removeClass('d-none');
    $('.team_subs_1, .team_subs_2, .team_subs_4, .team_subs_5 ').addClass('d-none').removeClass('d-block');
});

$('.team4').mouseenter(function () {
    $('.team_subs_4').addClass('d-block').removeClass('d-none');
    $('.team_subs_1, .team_subs_2, .team_subs_3, .team_subs_5 ').addClass('d-none').removeClass('d-block');
});

$('.team5').mouseenter(function () {
    $('.team_subs_5').addClass('d-block').removeClass('d-none');
    $('.team_subs_1, .team_subs_2, .team_subs_3, .team_subs_4 ').addClass('d-none').removeClass('d-block');
});