import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Customer } from './customer';

@Table
export class Deal extends Model {
  @Column({ primaryKey: true, type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  street!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  city!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  state!: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  area!: number;

  @Column({ type: DataType.DATE, allowNull: false })
  appointmentDate!: Date;

  @Column({ type: DataType.FLOAT, allowNull: false })
  price!: number;

  @Column({ type: DataType.ENUM('In Progress', 'Closed'), allowNull: false })
  status!: 'In Progress' | 'Closed';

  @ForeignKey(() => Customer)
  @Column({ type: DataType.UUID })
  customerId!: string;

  @BelongsTo(() => Customer)
  customer!: Customer;

  @Column({ type: DataType.INTEGER, allowNull: false })
  numOfPeople!: number;
}
