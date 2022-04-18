import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 32 })
    name: string;

    @Column('varchar', { length: 32 })
    email: string;

    @Column('varchar', { length: 255 })
    password_hash: string;

    @Column('boolean')
    user_verified: boolean;

    @Column('boolean', { default: true })
    account_status: boolean;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    registration_datetime: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    last_logged_in: string;

    @DeleteDateColumn()
    deletedAt?: Date;
}
