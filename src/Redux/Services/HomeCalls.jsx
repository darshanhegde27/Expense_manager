import superbase from './superbase';
//sighn up
export async function SignUp(emailP, passwordP) {
  let Res= await superbase.auth.signUp({
    email: emailP,
    password: passwordP,
  });
    return Res;
 
  
  
}
//Sighn in
export async function SignIn(emailP, passwordP) {
  let { user, error } = await superbase.auth.signIn({
    email: emailP,
    password: passwordP,
  });
  return [user, error];
}
