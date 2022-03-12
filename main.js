document.addEventListener( 'DOMContentLoaded' , function( e ) {
    let select = document.getElementById("select");
    const hokkaido = ["北海道"];
    const tohoku = ["青森県","秋田県","岩手県","山形県","宮城県","福島県"];
    const chubu = ["新潟県","富山県","石川県","福井県","長野県","岐阜県","山梨県","愛知県","静岡県"];
    const kanto = ["群馬県","栃木県","茨城県","埼玉県","千葉県","東京都","神奈川県"];
    const kinki = ["三重県","京都府","滋賀県","大阪府","兵庫県","奈良県","和歌山県"];
    const chugoku = ["鳥取県","島根県","岡山県","広島県","山口県"];
    const shikoku = ["徳島県", "香川県", "愛媛県", "高知県"];
    const kyushu = ["福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
    select.addEventListener('change', ChangeLocal);
    function ChangeLocal(event) {
        let array=[];
        if (event.currentTarget.value == "hokkaido")
            array = hokkaido;
        if (event.currentTarget.value == "tohoku")
            array = tohoku;
        if (event.currentTarget.value == "chubu")
            array = chubu;
        if (event.currentTarget.value == "kanto")
            array = kanto;
        if (event.currentTarget.value == "kinki")
            array = kinki;
        if (event.currentTarget.value == "chugoku")
            array = chugoku;
        if (event.currentTarget.value == "shikoku")
            array = shikoku;
        if (event.currentTarget.value == "kyushu")
            array = kyushu;
        let list = document.getElementById('list');
        // 前の要素削除
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        for (let index = 0; index < array.length; index++) {
            let item = document.createElement('li');
            item.classList.add('search__select-item');
            item.textContent = array[index];
            list.appendChild(item);
        }
    }
}, false );


