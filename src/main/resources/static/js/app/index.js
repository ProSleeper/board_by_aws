// var main = {
//     init : function () {
//         var _this = this;
//         $('#btn-save').on('click', function () {
//             _this.save();
//         });
//     },
//     save : function () {
//         var data = {
//             title: $('#title').val(),
//             author: $('#author').val(),
//             content: $('#content').val()
//         };
//
//         $.ajax({
//             type: 'POST',
//             url: '/api/v1/posts',
//             dataType: 'json',
//             contentType:'application/json; charset=utf-8',
//             data: JSON.stringify(data)
//         }).done(function() {
//             alert('글이 등록되었습니다.');
//             location.reload();
//         }).fail(function (error) {
//             alert(JSON.stringify(error));
//         });
//     }
//
// };
//
// main.init();


const main = {
    init : function() {
        const _this = this;
        $("#btn-save").on('click', () => {
            _this.save();
        })
        $("#btn-update").on('click', () => {
            _this.update();
        })
        $("#btn-delete").on('click', () => {
            _this.delete();
        })

    },
    save : () => {
        const data = {
            title : document.querySelector("#title").value,
            author : document.querySelector("#author").value,
            content : document.querySelector("#content").value,
        };
        fetch("/api/v1/posts", {
            method : 'post',
            headers : {
                'Content-Type':'application/json; charset=utf-8',
            },
            body : JSON.stringify(data)
        })
            .then(() => {
                alert('글이 등록되었습니다.');
                window.location.href = "/";
            })
            .catch((error) => {
                alert(JSON.stringify(error));
            })

    },
    update : () => {
        const data = {
            title: document.querySelector("#title").value,
            content: document.querySelector("#content").value,
        }
        const id = document.querySelector("#id").value;

        fetch("/api/v1/posts/" + id, {
            method: 'put',
            headers :{
                'Content-Type': 'application/json; charset=utf-8'
            },
            body:JSON.stringify(data)
        })
            .then(() => {
                alert("글이 수정되었습니다.")
                window.location.href = '/';
            })
            .catch((error) => {
                console.error(JSON.stringify(error));
            })
    },
    delete : () => {
        const id = document.querySelector("#id").value;

        fetch("/api/v1/posts/" + id, {
            method: 'delete',
            headers :{
                'Content-Type': 'application/json; charset=utf-8'
            },
        })
            .then(() => {
                alert("글이 삭제되었습니다.")
                window.location.href = '/';
            })
            .catch((error) => {
                console.error(JSON.stringify(error));
            })
    }
}

main.init();