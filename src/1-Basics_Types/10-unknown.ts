/* Unknown é um daqueles tipos que, assim que você entende,
acha muitos casos de uso. Ele age como um irmão para o tipo any.
any permite ambiguidade - unknown requer especificidades. */

let x: unknown;

x = 100;
x = 'Carlos';
x = 900;
x = 10;
const y = 800;

//console.log(x + y); //O unknown não aceita se não houver a checagem do tipo antes

if (typeof x === 'number') console.log(x + y);

//Module mode
export default 1;
