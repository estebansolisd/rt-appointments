import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
class Todo extends Model {
  @Column({ primaryKey: true, type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id!: string;

  @Column({ type: DataType.DATE, allowNull: false })
  date!: Date;

  @Column({ type: DataType.TEXT, allowNull: false })
  description!: string;

  @Column({ type: DataType.ENUM('Pending', 'In Progress', 'Completed'), allowNull: false })
  status!: 'Pending' | 'In Progress' | 'Completed';
}

export default Todo;