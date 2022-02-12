//Singleton = Gof | Factory Method - Gof

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host} ${this.user} ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;

    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const database = Database.getDatabase('localhost', 'root', '123456');
database.connect();

const database2 = Database.getDatabase('localhost', 'user', '234561');
database2.connect();
