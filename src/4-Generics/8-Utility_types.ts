//Record
const obj: Record<string, string | number> = {
  nome: 'Luis',
  idade: 32,
};

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//Required
//transforma parâmetros opcionais em obrigatórios.
type PessoaRequired = Required<PessoaProtocol>;

//Partial
//transforma parâmetros obrigatórios em opcionais.
type PessoaPartial = Partial<PessoaRequired>;

//Readonly
type PessoaReadonly = Readonly<PessoaRequired>;


//Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const obj2: PessoaRequired = {
  nome: 'Carlos',
  sobrenome: 'Fernando',
  idade: 16,
};

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

//Exclude
//computado todos os tipos presentes em ABC que não fazem parte de CDE.
type TipoExclude = Exclude<ABC, CDE>;

//Extract
//Computado todos os tipos presentes em ABC que também esteja em CDE.
type TipoExtract = Extract<ABC, CDE>;


//Passando de '_id' para 'id'.
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
}

const accountMongo: AccountMongo = {
  _id: '1234dfgj2j-112j4h5',
  nome: 'Luis',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const {_id, ...accountData} = accountMongo;
  return {...accountData, id: _id};
}

const AccountApi = mapAccount(accountMongo);
console.log('API:');
console.log(AccountApi);

