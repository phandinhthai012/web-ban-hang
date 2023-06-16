const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const com = document.querySelector('.list-comments');
const comment = document.querySelectorAll('.list-comment-item');
// console.log(comment.length);

var translateY = 0;
var count = comment.length;


next.addEventListener('click',function(event){
    event.preventDefault()
    if(count==1){

        return false;
    }
    translateY += -400;
    com.style.transform = `translateY(${translateY}px)`;
    count--;
    console.log(count);
})

prev.addEventListener('click',function(event){
    event.preventDefault()
    if(count==comment.length){
        return false;
    }
    translateY +=400;
    com.style.transform = `translateY(${translateY}px)`
    count++;
    console.log(count);
})