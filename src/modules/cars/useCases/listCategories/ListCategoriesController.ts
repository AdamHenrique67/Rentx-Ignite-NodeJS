import { ListCategoryUseCase } from "./ListCategoriesUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoryUseCase);

    const all = await listCategoryUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
