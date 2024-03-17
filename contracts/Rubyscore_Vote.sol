// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {IBlast} from "./interfaces/IBlast.sol";

contract Rubyscore_Vote {
    IBlast public constant BLAST = IBlast(0x4300000000000000000000000000000000000002);

    constructor(address admin) {
        require(admin != address(0));
        BLAST.configureClaimableGas();
        BLAST.configureAutomaticYield();
        BLAST.configureGovernor(admin);
    }

    fallback() external payable {}

    function vote() external payable {}
}
