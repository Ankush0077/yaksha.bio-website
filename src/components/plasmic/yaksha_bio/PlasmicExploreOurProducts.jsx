// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aVP2apPsGdtbbE3Ko35BuK
// Component: bbzfZjS_ePlb
import * as React from "react";
import {
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import Button2 from "../../Button2"; // plasmic-import: PvecFb5b5bZM/component
import { useScreenVariants as useScreenVariants_7W0MW2O8Buaj } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 7w0mW2O8Buaj/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: aVP2apPsGdtbbE3Ko35BuK/projectcss
import sty from "./PlasmicExploreOurProducts.module.css"; // plasmic-import: bbzfZjS_ePlb/css
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: Q-Z5gJ03p2kR/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: JE5mYlbpxHx6/icon
import YoutubeSvgrepoComsvgIcon from "./icons/PlasmicIcon__YoutubeSvgrepoComsvg"; // plasmic-import: -ZNSd1uXgnpo/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: iJlye_Nu5M3r/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: ny5ye-RGKpwz/icon

createPlasmicElementProxy;

export const PlasmicExploreOurProducts__VariantProps = new Array();

export const PlasmicExploreOurProducts__ArgProps = new Array();

const $$ = {};

function PlasmicExploreOurProducts__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_7W0MW2O8Buaj()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <section className={classNames(projectcss.all, sty.section__zgwz8)}>
            <NavigationBar
              data-plasmic-name={"navigationBar"}
              data-plasmic-override={overrides.navigationBar}
              brand={
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__kywdj
                  )}
                  href={`/`}
                  platform={"react"}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__aJ3YG)}
                    displayHeight={"35px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"35px"}
                    loading={"lazy"}
                    src={
                      "https://i.postimg.cc/Kzd0GyGf/ell-removebg-preview.png"
                    }
                  />

                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__qx2L)}
                    displayHeight={"35px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"15px"}
                    loading={"lazy"}
                    src={
                      "https://i.postimg.cc/s2HnLhbt/Screenshot-from-2024-06-23-05-31-27-removebg-preview.png"
                    }
                  />

                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___7XQyw)}
                    displayHeight={"35px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"115px"}
                    loading={"lazy"}
                    src={
                      "https://i.postimg.cc/qM257gC3/ell-2-removebg-preview.png"
                    }
                  />
                </PlasmicLink__>
              }
              className={classNames("__wab_instance", sty.navigationBar)}
              closeButton={
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__f0Eqd)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={"https://static1.plasmic.app/close.svg"}
                />
              }
              itemsGap={8}
              menuItems={
                <React.Fragment>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__j21Hf
                    )}
                    href={
                      hasVariant(globalVariants, "screen", "desktopOnly")
                        ? `/explore-our-products`
                        : `/`
                    }
                    platform={"react"}
                    target={
                      hasVariant(globalVariants, "screen", "desktopOnly")
                        ? undefined
                        : undefined
                    }
                  >
                    {hasVariant(globalVariants, "screen", "desktopOnly") ? (
                      "Our Products"
                    ) : (
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#000000" }}
                        >
                          {"Our Products"}
                        </span>
                      </React.Fragment>
                    )}
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___9E99L
                    )}
                    href={
                      hasVariant(globalVariants, "screen", "desktopOnly")
                        ? "tel:+917759042193"
                        : "tel:+917759042193"
                    }
                    platform={"react"}
                    target={undefined}
                  >
                    {hasVariant(globalVariants, "screen", "desktopOnly") ? (
                      "Talk To Us"
                    ) : (
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#000000" }}
                        >
                          {"Talk To Us"}
                        </span>
                      </React.Fragment>
                    )}
                  </PlasmicLink__>
                </React.Fragment>
              }
              openButton={
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__u1Vlo)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={"https://static1.plasmic.app/menu.svg"}
                />
              }
              responsiveBreakpoint={768}
            />
          </section>
          <section className={classNames(projectcss.all, sty.section__uosm)}>
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Our Products"}
            </h1>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rB3YG
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#FF0000", fontWeight: 700 }}
                >
                  {"HINK"}
                </span>
              </React.Fragment>
            </div>
            <div className={classNames(projectcss.all, sty.columns__mlJ8C)}>
              <div className={classNames(projectcss.all, sty.column__hzUh)}>
                <div className={classNames(projectcss.all, sty.freeBox__ulsj)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__uPMnh)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={
                      "https://i.postimg.cc/Wz4Sw6ND/ell-7-removebg-preview-1-removebg-preview-removebg-preview.png"
                    }
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox___9SHcW)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lOiP
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#ffffff", fontWeight: 700 }}
                        >
                          {"HINK Anti-Heat Cold Drink (Plastic)"}
                        </span>
                      </React.Fragment>
                    </div>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__jrHiT
                      )}
                      href={"https://forms.gle/jjHcGQbf7bTxWEheA"}
                      platform={"react"}
                      target={"_blank"}
                    >
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__bf9Gg
                        )}
                        color={"white"}
                      >
                        {"Inquire"}
                      </Button2>
                    </PlasmicLink__>
                  </div>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__qSCb)}>
                <div className={classNames(projectcss.all, sty.freeBox__jor5P)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__orAtx)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={
                      "https://i.postimg.cc/63f10pCP/ell-11-removebg-preview.png"
                    }
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox__cvh2C)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__k9Nfh
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#ffffff", fontWeight: 700 }}
                        >
                          {"HINK Anti-Heat Cold Drink (Glass)"}
                        </span>
                      </React.Fragment>
                    </div>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__s9QWr
                      )}
                      href={"https://forms.gle/jjHcGQbf7bTxWEheA"}
                      platform={"react"}
                      target={"_blank"}
                    >
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__wLflo
                        )}
                        color={"white"}
                      >
                        {"Inquire"}
                      </Button2>
                    </PlasmicLink__>
                  </div>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__z04K2)}>
                <div className={classNames(projectcss.all, sty.freeBox__pSrPh)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___1SlA7)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={
                      "https://i.postimg.cc/pdCCFF2m/ell-3-removebg-preview.png"
                    }
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox__f6N1D)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cTGs2
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#ffffff", fontWeight: 700 }}
                        >
                          {"HINK Anti-Heat Cold Drink (Can)"}
                        </span>
                      </React.Fragment>
                    </div>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__xZqe
                      )}
                      href={"https://forms.gle/jjHcGQbf7bTxWEheA"}
                      platform={"react"}
                      target={"_blank"}
                    >
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2___5Wz9D
                        )}
                        color={"white"}
                        link={""}
                        submitsForm={false}
                        target={true}
                      >
                        {"Inquire"}
                      </Button2>
                    </PlasmicLink__>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uFzxa
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{
                    color: "var(--token-jgohepLVeKvh)",
                    fontWeight: 700
                  }}
                >
                  {"HEATROK"}
                </span>
              </React.Fragment>
            </div>
            <div className={classNames(projectcss.all, sty.columns__psKMq)}>
              <div className={classNames(projectcss.all, sty.column__iayHq)}>
                <div className={classNames(projectcss.all, sty.freeBox__e2N0)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__cAyf)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={
                      "https://i.postimg.cc/KcdJMLXY/ell-9-removebg-preview.png"
                    }
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox___2B3WA)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ikIiw
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#ffffff", fontWeight: 700 }}
                        >
                          {"HEATOK Anti-Heat Stress Powder"}
                        </span>
                      </React.Fragment>
                    </div>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__gfs9J
                      )}
                      href={"https://forms.gle/jjHcGQbf7bTxWEheA"}
                      platform={"react"}
                      target={"_blank"}
                    >
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__b6SDp
                        )}
                        color={"white"}
                      >
                        {"Inquire"}
                      </Button2>
                    </PlasmicLink__>
                  </div>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column___8W6Mq)}>
                <div className={classNames(projectcss.all, sty.freeBox__bZ4GG)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__qwKaw)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={
                      "https://i.postimg.cc/HsS7X95D/ell-2-removebg-preview.png"
                    }
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox__kHRvG)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___0R4Oq
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#ffffff", fontWeight: 700 }}
                        >
                          {"HEATROK Anti-Heat Stress Tablets"}
                        </span>
                      </React.Fragment>
                    </div>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__sf9To
                      )}
                      href={"https://forms.gle/jjHcGQbf7bTxWEheA"}
                      platform={"react"}
                      target={"_blank"}
                    >
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__mySjq
                        )}
                        color={"white"}
                      >
                        {"Inquire"}
                      </Button2>
                    </PlasmicLink__>
                  </div>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__cvNs7)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___4At0X)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__nrKf1)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={
                      "https://i.postimg.cc/RZNJRJQ3/ell-1-removebg-preview.png"
                    }
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox__orQvq)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__n7FUb
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#ffffff", fontWeight: 700 }}
                        >
                          {"HEATROK Anti-Heat Stress Sunscreen"}
                        </span>
                      </React.Fragment>
                    </div>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__a0S8B
                      )}
                      href={"https://forms.gle/jjHcGQbf7bTxWEheA"}
                      platform={"react"}
                      target={"_blank"}
                    >
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__tkfcV
                        )}
                        color={"white"}
                        link={"https://forms.gle/jjHcGQbf7bTxWEheA"}
                        target={true}
                      >
                        {"Inquire"}
                      </Button2>
                    </PlasmicLink__>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__jnHqE)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___9LLOo)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={
                "https://i.postimg.cc/d1K7wHMd/Screenshot-2024-06-23-183846-removebg-preview.png"
              }
            />

            <div className={classNames(projectcss.all, sty.columns__nrlRu)}>
              <div className={classNames(projectcss.all, sty.column__o8Dim)}>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__gpYcK
                  )}
                  href={"mailto:yaksha.bio@gmail.com"}
                  platform={"react"}
                >
                  <Button2
                    className={classNames(
                      "__wab_instance",
                      sty.button2___5GoCt
                    )}
                    showEndIcon={true}
                  >
                    {"Email Us"}
                  </Button2>
                </PlasmicLink__>
              </div>
              <div className={classNames(projectcss.all, sty.column__zhjF4)}>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__rkiDy
                  )}
                  href={"tel:+917759042193"}
                  platform={"react"}
                >
                  <Button2
                    className={classNames("__wab_instance", sty.button2___1HE5)}
                    showEndIcon={true}
                  >
                    {"Call Us"}
                  </Button2>
                </PlasmicLink__>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__au3De)}>
            <div className={classNames(projectcss.all, sty.freeBox__hykBx)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xxJrN
                )}
              >
                {"\u00a9 2024 yaksha.bio\u2122. All Rights Reserved."}
              </div>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__afhJx
                )}
                href={
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? "https://www.linkedin.com/company/yaksha-biotech"
                    : "https://www.linkedin.com/company/yaksha-biotech"
                }
                platform={"react"}
                target={
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? "_blank"
                    : "_blank"
                }
              >
                <Icon4Icon
                  className={classNames(projectcss.all, sty.svg__g3ZM)}
                  role={"img"}
                />
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__pjPzQ
                )}
                href={
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? "https://www.instagram.com/yaksha.bio/"
                    : "https://www.instagram.com/yaksha.bio/"
                }
                platform={"react"}
                target={
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? "_blank"
                    : "_blank"
                }
              >
                <Icon5Icon
                  className={classNames(projectcss.all, sty.svg__hZz3T)}
                  role={"img"}
                />
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__sg6HJ
                )}
                href={
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? "https://www.youtube.com/channel/UCmuVv0MB8zK_vPEJFRTGm6Q"
                    : "https://www.youtube.com/channel/UCmuVv0MB8zK_vPEJFRTGm6Q"
                }
                platform={"react"}
                target={
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? "_blank"
                    : "_blank"
                }
              >
                <YoutubeSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg___4WA6)}
                  role={"img"}
                />
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__abYxm
                )}
                href={"https://www.facebook.com/profile.php?id=61561473477352"}
                platform={"react"}
                target={"_blank"}
              >
                <PlasmicIcon__
                  PlasmicIconType={
                    hasVariant(globalVariants, "screen", "desktopOnly")
                      ? Icon7Icon
                      : Icon7Icon
                  }
                  className={classNames(projectcss.all, sty.svg___41Rlf)}
                  role={"img"}
                />
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__gcON
                )}
                href={"https://x.com/YakshaBiotech"}
                platform={"react"}
                target={"_blank"}
              >
                <Icon8Icon
                  className={classNames(projectcss.all, sty.svg__lTDx5)}
                  role={"img"}
                />
              </PlasmicLink__>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navigationBar", "h1"],
  navigationBar: ["navigationBar"],
  h1: ["h1"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicExploreOurProducts__ArgProps,
          internalVariantPropNames: PlasmicExploreOurProducts__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicExploreOurProducts__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicExploreOurProducts";
  } else {
    func.displayName = `PlasmicExploreOurProducts.${nodeName}`;
  }
  return func;
}

export const PlasmicExploreOurProducts = Object.assign(
  // Top-level PlasmicExploreOurProducts renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    h1: makeNodeComponent("h1"),
    // Metadata about props expected for PlasmicExploreOurProducts
    internalVariantProps: PlasmicExploreOurProducts__VariantProps,
    internalArgProps: PlasmicExploreOurProducts__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicExploreOurProducts;
/* prettier-ignore-end */
