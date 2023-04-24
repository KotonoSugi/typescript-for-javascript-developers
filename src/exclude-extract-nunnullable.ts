export{};

type DebugType = () => void;
type SomeTypes =string | number | DebugType;
type FunctionType = Exclude<SomeTypes,string | number>; //Stringとnumberを除外

//関数DebugTypeを除外する方法１
type NunFuntionType = Exclude<SomeTypes,DebugType>; 
//関数を除外する方法２（Functionが関数の相称）
type TypeExculudingFunction = Exclude<SomeTypes,Function>;

type FunctionTypeByExtract = Extract<SomeTypes,DebugType>; //関数だけ取り出す
type NonFunctionTypeByExtract = Extract<SomeTypes,string|number>; //stringとnumberだけ取り出す

type Nullabletypes = string | number | null | undefined;
type NonNullabletypes = NonNullable<Nullabletypes>; //null undefinedを除外

