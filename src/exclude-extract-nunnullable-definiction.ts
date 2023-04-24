export{};

type MyExclude = DebugType; //Excludeの定義
type DebugType = () => void;
type SomeTypes =string | number | DebugType;
type FunctionType = Exclude<SomeTypes,string | number>; //Stringとnumberを除外
type MyFunctionType = MyExclude;


type FunctionTypeByExtract = Extract<SomeTypes,DebugType>; //関数だけ取り出す

type Nullabletypes = string | number | null | undefined;
type NonNullabletypes = NonNullable<Nullabletypes>; //null undefinedを除外

