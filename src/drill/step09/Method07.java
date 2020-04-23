/**
 * Method10.java
 *
 * Copyright (C) 2014 by Future Architect, Inc. Japan
 */

package drill.step09;

/**
 * [キーワード]java  method  インスタンス化  new演算子  メソッド
 *
 * @author odagiri
 */
public class Method07 {

	public static void main(String[] args) {

		// TODO 1: Diceオブジェクトを1個だけ作り、
		// shakeして出目を表示する、ということを5回やりましょう
		// ただし、forまたはwhileの繰り返しを利用すること

		// =======================================================
		// [出力結果]
		// =======================================================
		// サイコロを振った出目は1でした
		// サイコロを振った出目は3でした
		// サイコロを振った出目は6でした
		// サイコロを振った出目は4でした
		// サイコロを振った出目は3でした
		//-----↓実装ここから↓-------
		Dice d1 = new Dice();
		for(int i =0 ; i <5; i++){
			d1.shake();
			System.out.println("サイコロを振った出目は"+d1.getPip()+"でした");
		}




		//-----↑実装ここまで↑-------

	}

}

class Dice {

	private int pip;

	public void shake() {
		this.pip = (int) (Math.random() * 6 + 1);
	}

	public int getPip() {
		return this.pip;
	}

}
