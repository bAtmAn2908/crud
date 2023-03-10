import React from 'react'

export const Login = () => {
  return (
    <div>
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
  <label for="floatingPassword">Password</label>
</div>
<button type="button" class="btn btn-success">Login</button>
    </div>
  )
}
