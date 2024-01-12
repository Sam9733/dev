let int
document.querySelector('#start').addEventListener('click', function(){
    const bgcolor=function(){
        // const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor=randomColor()
    }
    if(!int)
    int = setInterval(bgcolor,1000)
    document.querySelector('#stop').addEventListener('click',function(){
        clearInterval(int)
        int=null
    })
})

const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}