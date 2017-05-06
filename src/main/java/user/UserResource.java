package user;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import entidades.User;
import service.UserService;

@Path(value = "/users")
public class UserResource {

	@Inject
	private UserService userService;

	@POST
	@Path(value = "/auth")
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response findByName(User u) {
		boolean authenticate = userService.authenticate(u);
		if (authenticate) {
			return Response.ok().header(HttpHeaders.AUTHORIZATION, "Bearer " + "token").build();
		}
		return Response.status(Status.UNAUTHORIZED.getStatusCode()).build();
	}

	@GET
	@Path(value = "/name/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response findByName(@PathParam(value = "name") String name) {
		return Response.ok().entity(userService.findByName(name)).build();
	}

	@GET
	@Path(value = "/email/{email}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response findByEmail(@PathParam(value = "email") String email) {
		return Response.ok().entity(userService.findByEmail(email)).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response findAll() {
		return Response.ok().entity(userService.findAll()).build();
	}

	@POST
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insert(User u) {
		userService.inserir(u);
		return Response.ok().entity("OK").build();
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response update(User user) {
		userService.update(user);
		return Response.ok().entity("update ok").build();
	}

	private String issueToken(String login) {
        
//		Key key = keyGenerator.generateKey();
//        
//        String jwtToken = Jsonwwts.builder()
//                .setSubject(login)
//                .setIssuer(uriInfo.getAbsolutePath().toString())
//                .setIssuedAt(new Date())
//                .setExpiration(toDate(LocalDateTime.now().plusMinutes(15L)))
//                .signWith(SignatureAlgorithm.HS512, key)
//                .compact();
//        return jwtToken;
		return null;
    }
	
}
