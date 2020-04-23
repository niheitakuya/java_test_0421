
/* ログインファンクション */
function login() {
	// 入力されたユーザーIDとパスワード
	var requestQuery = {
		userId : $('#js-login-id').val()
		,password:$('#js-login-pass').val()
	};
	// サーバーからデータを取得する
	$.ajax({
		type : 'POST',
		dataType:'json',
		url : '/javaTraining/LoginServlet',
		data : requestQuery,
		success : function(json) {
			// サーバーとの通信に成功した時の処理
			// 確認のために返却値を出力
			if(json == "ok"){
				alert('ログイン成功');
			}else{
				alert('ログイン失敗');
			}

		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			// サーバーとの通信に失敗した時の処理
			alert('データの通信に失敗しました');
			console.log(errorThrown)
		}
	});
}


/**
 * 読み込み時の動作
 */
$(document).ready(function() {

	// ログインボタンを押したときのイベント
	$('#js-login-button').click(login);


});