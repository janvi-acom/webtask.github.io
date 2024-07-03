
const bt1=document.getElementById('press');
var form=document.getElementById('form');

bt1.addEventListener('click',function(event){
    event.preventDefault()
    const txt1=document.getElementById('namef').value;
const txt3=document.getElementById('namel').value;
const txt4=document.getElementById('add').value;
const txt5=document.getElementById('pho').value;
const txt6=document.getElementById('ema').value;
const txt7=document.getElementById('pname').value;
const txt8=document.getElementById('page').value;
    // console.log(txt1)
    alert('Firstname is '+ txt1+   
        '   Lastname is '+ txt3+   
        '   address is '+ txt4+   
        '   phone number  is '+ txt5+   
        '    email is '+ txt6+   
    '      Pet name is '+ txt7+   
    '       Pet age  is '+ txt8  );

});

