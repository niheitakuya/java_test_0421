
/* GETでHTTPリクエストを送信するファンクション */
function get() {
	// 入力されたユーザーIDとパスワード
	var requestQuery = {};
	requestQuery[$('#js-key1').val()] = $('#js-value1').val();
	requestQuery[$('#js-key2').val()] = $('#js-value2').val();
	requestQuery[$('#js-key3').val()] = $('#js-value3').val();

	// サーバーからデータを取得する
	$.ajax({
		type : 'GET',
		dataType:'json',
		url : '/javaTraining/GetPostSampleServlet',
		data : requestQuery,
		success : function(json) {
			// サーバーとの通信に成功した時の処理
			alert('Eclipseのコンソールを確認してね')

		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			// サーバーとの通信に失敗した時の処理
			alert('データの通信に失敗しました');
			console.log(errorThrown)
		}
	});
}


/* POSTでHTTPリクエストを送信するファンクション */
function post() {
	// 入力されたユーザーIDとパスワード
	var requestQuery = {};
	requestQuery[$('#js-key1').val()] = $('#js-value1').val();
	requestQuery[$('#js-key2').val()] = $('#js-value2').val();
	requestQuery[$('#js-key3').val()] = $('#js-value3').val();

	// サーバーからデータを取得する
	$.ajax({
		type : 'POST',
		dataType:'json',
		url : '/javaTraining/GetPostSampleServlet',
		data : requestQuery,
		success : function(json) {
			// サーバーとの通信に成功した時の処理
			alert('Eclipseのコンソールを確認してね')

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

	// GETでHTTPリクエストボタンを押したときのイベント
	$('#js-get-button').click(get);
	// POSTでHTTPリクエストボタンを押したときのイベント
	$('#js-post-button').click(post);


});