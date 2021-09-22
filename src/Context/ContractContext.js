import { createContext } from "react";
import { useContract } from "web3-hooks";
import { daoFactoryAbi } from "../contracts/DaoFactoryAbi";
import { daoAbi } from "../contracts/DaoAbi";
import { governanceAbi } from "../contracts/GovernanceAbi";
// import { managementAbi } from "../contracts/ManagementAbi";
// import { treasuryAbi } from "../contracts/TreasuryAbi";

export const ContractsContext = createContext(null);

const ContractsContextProvider = ({ children }) => {
  let daoAbi_address, daoFactory_address, governance_address, management_address, treasury_address
  const daoFactory = useContract(daoFactory_address, daoFactoryAbi)
  const dao = useContract(daoAbi_address, daoAbi)
  const governance = useContract(governance_address, governanceAbi)
  //const management = useContract(management_address, managementAbi)
  //const treasury = useContract(treasury_address, treasuryAbi)

  return (
    <ContractsContext.Provider value={[daoFactory, dao, governance, /*management, treasury*/]}>
      {children}
    </ContractsContext.Provider>
  );
};

export default ContractsContextProvider;