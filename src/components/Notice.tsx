import { CKD_REGULATORY_STATUS } from "@/lib/company";

export function RegStatus() {
  return (
    <div className="reg" role="note">
      <b>REGULATORY STATUS</b>
      {CKD_REGULATORY_STATUS}
    </div>
  );
}
