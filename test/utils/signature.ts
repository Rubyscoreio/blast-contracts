import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import type { IRubyscore_Achievement } from "@contracts/interfaces/IRubyscore_Achievement";
import type { AttestationPayloadStruct } from "@contracts/certificates/abstracts/AbstractModule";

interface RSV {
  r: string;
  s: string;
  v: number;
}

export interface Domain {
  name: string;
  version: string;
  chainId: string;
  verifyingContract: string;
}

interface IArrayItem {
  name: string;
  type: string;
}

export interface ITypes {
  [key: string]: IArrayItem[];
}

const createTypedData = (
  domain: Domain,
  types: ITypes,
  primaryType: string,
  message: IRubyscore_Achievement.MintParamsStruct | AttestationPayloadStruct
) => {
  return {
    domain,
    types,
    primaryType,
    message,
  };
};

export const splitSignatureToRSV = (signature: string): RSV => {
  const r = "0x" + signature.substring(2).substring(0, 64);
  const s = "0x" + signature.substring(2).substring(64, 128);
  const v = parseInt(signature.substring(2).substring(128, 130), 16);

  return { r, s, v };
};

export const sign = async (
  domain: Domain,
  types: ITypes,
  primaryType: string,
  message: IRubyscore_Achievement.MintParamsStruct | AttestationPayloadStruct,
  signer: SignerWithAddress
): Promise<string> => {
  // const typedData = createTypedData(domain, types, primaryType, message);

  const rawSignature = await signer._signTypedData(domain, types, message);

  return rawSignature;
};
