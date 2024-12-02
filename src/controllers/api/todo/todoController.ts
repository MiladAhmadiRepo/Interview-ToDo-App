import { Controller, Get, Param, Post, Body, Put, Req } from '@nestjs/common';
import { TodoUseCases } from '../../../use-cases/todo/todo.use-case';
import { CreateTodoDto } from '../../../core/dtos';

@Controller('api/todo')
export class TodoController {
  constructor(private todoUseCases: TodoUseCases) {}

  @Post()
  async createTodo(@Body() body: CreateTodoDto, @Req() req) {
    try {
      let result = this.todoUseCases.createTodo(body);
      return {
        status: 200,
        result,
      };
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async listTodos(@Req() req) {
    try {
      let result = this.todoUseCases.listTodos(req.user.id);
      return {
        status: 200,
        result,
      };
    } catch (error) {
      throw error;
    }
  }

  //---------------------------------------------------------------------------------------------

  // @Get()
  // async getAllTodos() {
  //   return this.todoUseCases.getAllTodos();
  // }


  // @Get(':id')
  // async getTodoById(@Param('id') id: any) {
  //   return this.todoUseCases.getTodoById(id);
  // }
}
