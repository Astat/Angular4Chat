export class MathResponse {

  /** User query */
  public query: string

  /** Server response */
  public response: string

  /** Server error */
  public error: string

  /** Should help be displayed ? */
  public help: boolean

  /** Should about be displayed ? */
  public about: boolean;

  /** Was the query successful ? */
  public ok: boolean;

  /** Constructor for successful queries */
  public static buildOk(query:string, response:string) {
    let myResponse = new MathResponse();
    myResponse.query = query;
    myResponse.response = response;
    myResponse.ok = true;
    return myResponse;
  }

  /** Builder for queries leading to server errors */
  public static buildKo(query:string, message: string) {
    let myResponse = new MathResponse();
    myResponse.query = query;
    myResponse.error = message;
    return myResponse;
  }
  
  /** Builder for queries leading to help being displayed */
  public static buildHelp() {
    let myResponse = new MathResponse();
    myResponse.help = true;
    return myResponse;
  }

  /** Builder for about queries */
  public static buildAbout() {
    let myResponse = new MathResponse();
    myResponse.about = true;
    return myResponse;
  }

}
