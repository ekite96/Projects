1. An interesting challenge that I faced was verifying the token by parsing through the elements of the JWT. Luckily, I found a method for parsing a string based
on a certain character which was helpful since the token value was separated by periods.

2. I think since the token is public and the SHA256 algorithm is very common it is easy to intercept and process the data for it. The password is encrypted inside
the token which is the only thing keeping the user's profile form being accesible.
