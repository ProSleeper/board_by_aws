var main = {
    init : function () {
        var _this = this;
        $('#btn-save').on('click', function () {
            _this.save();
        });
    },
    save : function () {
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            alert('글이 등록되었습니다.');
            location.reload();
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    }

};

main.init();


// const main = {
//     init : () => {
//         const _this = this;
//         document.querySelector("#btn-save").addEventListener("click", () => {
//             _this.save();
//         })
//     },
//     save : () => {
//         const data = {
//             title : document.querySelector("#title").value,
//             author : document.querySelector("#author").value,
//             content : document.querySelector("#content").value,
//         };
//         fetch("/api/v1/posts", {
//             method : 'post',
//             headers : {
//                 'Content-Type':'application/json; charset=utf-8',
//             },
//             body : JSON.stringify(data)
//         })
//             .then(() => {
//                 alert('글이 등록되었습니다.');
//                 window.location.href = "/";
//             })
//             .catch((error) => {
//                 alert(JSON.stringify(error));
//             })
//
//     }
// }
//
// main.init();