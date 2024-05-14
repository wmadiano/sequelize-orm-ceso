const { sq } = require("../config/db");
const { DataTypes, Sequelize } = require("sequelize");

const Company = sq.define('company', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
  }, {
    tableName: 'company',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  const Employee = sq.define('employee', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    company_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    email_address: {
        type: DataTypes.STRING(255),
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
  }, {
    tableName: 'employee',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });


  const EmployeeTransaction = sq.define('employee_transaction', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    employee_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    transaction_date: {
        type: DataTypes.DATE,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
  }, {
    tableName: 'employee_transaction',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });


Employee.belongsTo(Company, { foreignKey: 'company_id', targetKey: 'id', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
Company.hasMany(Employee, { foreignKey: 'company_id', sourceKey: 'id' });

EmployeeTransaction.belongsTo(Employee, { foreignKey: 'employee_id', targetKey: 'id', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
Employee.hasMany(EmployeeTransaction, { foreignKey: 'employee_id', sourceKey: 'id' });

module.exports = {
    Employee,
    Company,
    EmployeeTransaction
};