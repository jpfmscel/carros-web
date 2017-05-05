package user;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import entidades.User;
import service.UserService;

@Path(value = "/users")
public class UserResource {

	@Inject
	private UserService userService;

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
		return Response.ok().entity("Insert ok").build();
	}

}
