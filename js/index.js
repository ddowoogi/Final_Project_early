setInterval(mainSlide,8000);

function mainSlide(){
  $("#slideBox").animate({"margin-left" : "-1580px"}, 1500, function(){
    $("#slideBox").css({"margin-left" : "-8px"});
    $(".promotion_area:first-child").insertAfter(".promotion_area:last-child");
    //button에 mouseover되면 멈추게
    $(".slide_btn").mouseover(function(){
      $(this).stop();
    });
    //밑에 동그라미도 같이 적용, 동그라미 클릭 이동
  });
};

function clicklogo(){
location.href="index.html";

}

$("popular_hotel").each(function(index){
    let img= $img.eq(index);
    let $img=$('.popular_hotel img');
$(this).on('mouseover',function(){
  img.css('opacity',0.4);
  like.fadeTo(300,1);
  $(this).css('box-shadow','0 3px 5 black');
});

$(this).on('mouseout',function(){
img.css('opacity',1);

});
});



const login_btn = document.querySelector(".loginForm");
const dropdown_login_box = document.querySelector("#dropdown-login");

handleClickLoginBtn = () => {
  dropdown_login_box.classList.toggle("show");
}

window.onclick = function (event) {
  const cond1 = String(event.path[1].id) === 'dropdown-login';
  const cond2 = String(event.path[1].id) === 'login-form';
  const clickedInsideLoginForm = cond1 || cond2;
  if (clickedInsideLoginForm) {
    return;
  }
  if (!event.target.matches('.loginForm')) {
    if (dropdown_login_box.classList.contains('show')) {
      dropdown_login_box.classList.remove('show');
    }
  }
}

login_btn.addEventListener("click", handleClickLoginBtn);
