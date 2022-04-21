import superbase from './superbase';
//sighn up
export async function SignUp(emailP, passwordP) {
  let { user, error } = await superbase.auth.signUp({
    email: emailP,
    password: passwordP,
  });
  return [user, error];
}
//Sighn in
export async function SignIn(emailP, passwordP) {
  let { user, error } = await superbase.auth.signIn({
    email: emailP,
    password: passwordP,
  });
  return [user, error];
}
