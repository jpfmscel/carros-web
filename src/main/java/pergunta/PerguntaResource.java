package pergunta;

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

import entidades.Pergunta;
import entidades.Resposta;
import service.PerguntaService;

@Path(value = "/perguntas")
public class PerguntaResource {

	@Inject
	private PerguntaService perguntaService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response findAll() {
		return Response.ok().entity(perguntaService.findAll()).build();
	}

	@GET
	@Path(value = "/user/{email}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findByEmail(@PathParam("email") String email) {
		return Response.ok().entity(perguntaService.findByEmail(email)).build();
	}

	@GET
	@Path(value = "/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response findById(@PathParam("id") Long id) {
		return Response.ok().entity(perguntaService.findById(id)).build();
	}

	@POST
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insert(Pergunta p) {
		perguntaService.inserir(p);
		return Response.ok().entity("OK").build();
	}

	@POST
	@Path(value = "/responder/{idPergunta}")
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response responder(@PathParam("idPergunta") Long idPergunta, Resposta r) {
		Pergunta p = perguntaService.findById(idPergunta);
		r.setUserEmail(p.getUserEmail());
		perguntaService.adicionarResposta(p, r);
		return Response.ok().entity("OK").build();
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response update(Pergunta p) {
		perguntaService.update(p);
		return Response.ok().entity("Insert ok").build();
	}

}
