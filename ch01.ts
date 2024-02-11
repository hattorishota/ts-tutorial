// 1.4.1 実践TypeScript
const firstName = "John";
const lengthName = firstName.length;

console.log(lengthName);

/**
 * ↓のようにすると、エラーが発生する
 * const lengthName = firstName.length();
 * エラー内容
 * Property 'length' does not exist on type 'string'.
 * JSではlength()というメソッドは存在しないため、エラーが発生するがエディタ上ではエラーが表示されない
*/

// 1.4.2 制限による自由
function sayMyName(fullName: string) {
    console.log(`You acting kind of shady, ain't calling' me ${fullName}!`);
}
sayMyName("John Doe");
// sayMyName("John Doe", "Knowles");

/**
 * JSであれば引数が多い場合は無視されるが、TSではエラーが発生する
 * エラー内容
 * Expected 1 arguments, but got 2.
 * JSではクラッシュせず実行されるが、その出力は期待したものとは異なる。（"Knowles"は含まれなくなる）
*/

// 1.4.4 正確なドキュメンテーション
interface Painter {
    finish(): boolean;
    ownMaterials; Material[];
    parseInt(painting: string, materials: Material[]): boolean;
}
function paintPainting(painter: Painter, painting: string) : boolean {
    return painter.finish() && painter.parseInt(painting, painter.ownMaterials);
}
/**
 * painter が少なくとも3つのプロパティを持っていることがわかる
 * そのうちの2つはメソッドで、1つはMaterial[]型のプロパティである
*/