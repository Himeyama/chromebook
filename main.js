function err1(){
    let w1 = Window.create(randID(16))
    w1.setTitle("System Error")
    w1.setContents('\
    <div class="exc_mark"></div>\
    <div class="err_msg">\
        <h1>重大なエラー</h1>\
        <span>コンピューターを再起動する必要があります。</span>\
        <div class="error_details">\
            <p>エラー番号: 09usag08-0w034</p>\
            <p>エラー情報: コード0980230 更新プログラムの種類: 重要</p>\
        </div>\
        <button>OK</button>\
    </div>')
    w1.element.style.width = 450
}

function randID(n){
    let alpabetList = []
    for(let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++ ){
        alpabetList[i - "a".charCodeAt()] = String.fromCharCode(i)
    }

    let id = []
    for(let i = 0; i < n; i++){
        id[i] = alpabetList[parseInt(Math.random() * 26)]
    }

    return id.join("")
}

function main(){
    let i = 0
    forerr1 = setInterval(function(){
        err1()
        Window.Top += 8
        Window.right += 8
        i++
        if(!(i < 24)){
            clearInterval(forerr1)
        }
    }, 100)
    
    
}

main()