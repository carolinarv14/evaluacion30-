 let strDate, dd,mm, yyyy, f
function vuelveFecha(fecha){
    //Si la fecha no es 10 caracteres se devuelve nom�s
    if (fecha=="" ||fecha==null ){
            return fecha;
    }
    if(fecha.length < 10){
        alert(m_0167);
        return fecha;
    }
        let strDate = fecha;
    
        let dd   = strDate.substring(0,2);
        let mm   = strDate.substring(3,5);
        let yyyy = strDate.substring(6,10);
        strDate  = dd + '/' + mm + '/' + yyyy;
    
        alert(strDate);
        return strDate;
    
        }
    
    function calcularEdad(){
        let f = new Date();
        day = f.getDate();
        month = f.getMonth()+1;
        year = f.getFullYear();
    
        if(day<10)
            day='0'+day;
        if(month<10)
            month='0'+month;
    
        fecha = day+"/"+month+"/"+year;
    
        alert("Hoy es : "+fecha);
        alert("el año es: "+year);
    }