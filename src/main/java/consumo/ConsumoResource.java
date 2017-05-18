package consumo;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import entidades.Consumo;
import service.ConsumoService;

@Path(value = "/consumo")
public class ConsumoResource {

	@Inject
	private ConsumoService consumoService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response findAll() {
		return Response.ok().entity(consumoService.findAll()).build();
	}

	@POST
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insert(Consumo c) {
		consumoService.inserir(c);
		return Response.ok().entity("OK").build();
	}

}
